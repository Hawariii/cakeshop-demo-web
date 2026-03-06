"use client";

import { useEffect, useMemo, useState } from "react";

type Schedule = {
  start: number;
  end: number;
  label: string;
};

const WEEK_SCHEDULE: Record<number, Schedule> = {
  1: { start: 8 * 60, end: 21 * 60, label: "08.00 - 21.00 WIB" },
  2: { start: 8 * 60, end: 21 * 60, label: "08.00 - 21.00 WIB" },
  3: { start: 8 * 60, end: 21 * 60, label: "08.00 - 21.00 WIB" },
  4: { start: 8 * 60, end: 21 * 60, label: "08.00 - 21.00 WIB" },
  5: { start: 8 * 60, end: 21 * 60, label: "08.00 - 21.00 WIB" },
  6: { start: 8 * 60, end: 22 * 60, label: "08.00 - 22.00 WIB" },
  0: { start: 9 * 60, end: 20 * 60, label: "09.00 - 20.00 WIB" },
};

const DAY_LABELS: Record<number, string> = {
  0: "Minggu",
  1: "Senin",
  2: "Selasa",
  3: "Rabu",
  4: "Kamis",
  5: "Jumat",
  6: "Sabtu",
};

function getJakartaParts(date: Date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Jakarta",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(date);

  const weekdayMap: Record<string, number> = {
    Sun: 0,
    Mon: 1,
    Tue: 2,
    Wed: 3,
    Thu: 4,
    Fri: 5,
    Sat: 6,
  };

  const weekday = weekdayMap[parts.find((part) => part.type === "weekday")?.value ?? "Mon"];
  const hour = Number(parts.find((part) => part.type === "hour")?.value ?? "0");
  const minute = Number(parts.find((part) => part.type === "minute")?.value ?? "0");

  return { weekday, minuteOfDay: hour * 60 + minute };
}

function formatMinute(minuteOfDay: number) {
  const hour = Math.floor(minuteOfDay / 60)
    .toString()
    .padStart(2, "0");
  const minute = (minuteOfDay % 60).toString().padStart(2, "0");
  return `${hour}.${minute} WIB`;
}

function getStatus(now: Date) {
  const { weekday, minuteOfDay } = getJakartaParts(now);
  const today = WEEK_SCHEDULE[weekday];
  const isOpen = minuteOfDay >= today.start && minuteOfDay < today.end;

  if (isOpen) {
    return {
      isOpen: true,
      badge: "OPEN",
      detail: `Tutup hari ini pukul ${formatMinute(today.end)}`,
      todayLabel: `${DAY_LABELS[weekday]}: ${today.label}`,
    };
  }

  if (minuteOfDay < today.start) {
    return {
      isOpen: false,
      badge: "CLOSED",
      detail: `Buka hari ini pukul ${formatMinute(today.start)}`,
      todayLabel: `${DAY_LABELS[weekday]}: ${today.label}`,
    };
  }

  const nextDay = (weekday + 1) % 7;
  const nextSchedule = WEEK_SCHEDULE[nextDay];
  return {
    isOpen: false,
    badge: "CLOSED",
    detail: `Buka ${DAY_LABELS[nextDay]} pukul ${formatMinute(nextSchedule.start)}`,
    todayLabel: `${DAY_LABELS[weekday]}: ${today.label}`,
  };
}

export function ShopStatus() {
  const [now, setNow] = useState<Date>(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 60_000);
    return () => clearInterval(timer);
  }, []);

  const status = useMemo(() => getStatus(now), [now]);

  return (
    <div className="shop-status-wrap">
      <span className={`shop-status-badge ${status.isOpen ? "is-open" : "is-close"}`}>
        {status.badge}
      </span>
      <p className="shop-status-detail">{status.detail}</p>
      <p className="shop-status-day">{status.todayLabel}</p>
    </div>
  );
}
