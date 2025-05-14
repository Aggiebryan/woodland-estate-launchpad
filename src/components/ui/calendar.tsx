
import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker, CaptionProps } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Select } from "@/components/ui/select";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  // Custom caption component with year dropdown
  function CustomCaption(captionProps: CaptionProps) {
    const { displayMonth, fromMonth, toMonth } = captionProps;
    
    // Get the current year
    const currentYear = displayMonth.getFullYear();
    
    // Generate a list of years (from 100 years ago to current year)
    const startYear = new Date().getFullYear() - 100;
    const endYear = new Date().getFullYear();
    const years = Array.from({ length: endYear - startYear + 1 }, (_, i) => startYear + i);

    // Handle month navigation
    const handlePreviousClick = () => {
      const newMonth = new Date(displayMonth);
      newMonth.setMonth(newMonth.getMonth() - 1);
      captionProps.onMonthChange(newMonth);
    };

    const handleNextClick = () => {
      const newMonth = new Date(displayMonth);
      newMonth.setMonth(newMonth.getMonth() + 1);
      captionProps.onMonthChange(newMonth);
    };

    // Handle year change
    const handleYearChange = (year: string) => {
      const newMonth = new Date(displayMonth);
      newMonth.setFullYear(parseInt(year));
      captionProps.onMonthChange(newMonth);
    };
    
    return (
      <div className="flex justify-center pt-1 relative items-center">
        <div className="flex items-center justify-between w-full">
          <button
            onClick={handlePreviousClick}
            disabled={fromMonth && displayMonth <= fromMonth}
            className={cn(
              buttonVariants({ variant: "outline" }),
              "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 absolute left-1"
            )}
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <div className="flex items-center gap-1">
            <span className="text-sm font-medium">
              {displayMonth.toLocaleString('default', { month: 'long' })}
            </span>
            <Select
              value={currentYear.toString()}
              onValueChange={handleYearChange}
            >
              <select 
                className="h-7 text-sm border-0 bg-transparent font-medium focus:ring-0 focus:outline-none"
                value={currentYear.toString()}
                onChange={(e) => handleYearChange(e.target.value)}
              >
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </Select>
          </div>
          <button
            onClick={handleNextClick}
            disabled={toMonth && displayMonth >= toMonth}
            className={cn(
              buttonVariants({ variant: "outline" }),
              "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 absolute right-1"
            )}
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3 pointer-events-auto", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell:
          "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100"
        ),
        day_range_end: "day-range-end",
        day_selected:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside:
          "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        Caption: CustomCaption
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
