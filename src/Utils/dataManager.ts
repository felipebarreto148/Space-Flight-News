import moment from "moment";

export class DateManager {
  convert(date: string) {
    return moment(date).format("DD/MM/YYYY");
  }
}
