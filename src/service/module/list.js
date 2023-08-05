import {http} from "@/service/index";

export function fetchIndexInfo() {
  return http.get({url: '/init'});
}
