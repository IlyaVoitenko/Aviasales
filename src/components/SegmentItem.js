import React from "react";
import style from "./css/SegmentItem.module.css";

function timeEnd(date, duration) {
  let startTime = new Date(date);
  let endTime = new Date(startTime.getTime() + duration * 60 * 1000);
  return `${startTime.getUTCHours()} : ${startTime.getUTCMinutes()}-
  ${endTime.getUTCHours()} : ${endTime.getUTCMinutes()}`;
}
const SegmentItem = ({ segments }) => {
  //return <div>segment</div>;
  return segments.map((segment, index) => {
    // время начала вылета
    const durationHours = Math.floor(segment.duration / 60);
    const durationMinutes = Math.floor(segment.duration) - durationHours * 60;
    // количество пересадок
    const countTransfers = segment.stops.length;

    return (
      <div key={index} className={style.containreTicketContext}>
        <div className={style.containerContext}>
          <div className={style.CodeCityies}>
            <div>
              {segment.destination} - {segment.origin}
              <div>{timeEnd(segment.date, segment.duration)}</div>
            </div>
            <div className={style.wayTime}>
              В ПУТИ
              <div>
                {durationHours}ч. {durationMinutes}м.
              </div>
            </div>
            <div>
              {countTransfers} ПЕРЕСАДОК
              <div className={style.parentStopCityDiv}>
                {segment.stops.map((stop, index) => {
                  return <div key={index}>{stop},</div>;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
};
export default SegmentItem;
