interface ICalendar extends TimeStamp {
  id: number;
  userId: IUser['id'];
  numberOfBreastfeed: string;
  numberOfFormulaMilk: string;
  isFeedingFood: number;
  calendarDate: string;
  averageTimeFeeding: string;
  averageTimeFeedingFormulaMilk: string;
}
