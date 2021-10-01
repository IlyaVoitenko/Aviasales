import React from "react";
import { useSelector } from "react-redux";
import style from "./css/RenderTicketsCard.module.css";
const RenderTicketsCard = () => {
  let id = 0;
  let idSegment = 0;
  let stopsId = 0;
  const ticketsArray = useSelector((state) => state.ticketsArray);
  return ticketsArray.map((ticket) => {
    id++;
    return (
      <div key={id} className={style.container}>
        <div className={style.containerImgPrice}>
          <h2 className={style.priceTicket}>{ticket.price} P</h2>
          <img
            className={style.imgAirlines}
            alt="Airlines"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAmVBMVEX///++1gB0dnm71ABxc3ZsbnFqbHCkpaf09PTS0tOgoaOUlphvcXTV5HX29/eBg4bs7e3g4OF5e37p8byMjpGxsrRlaGvb6Ij5++rk7ql4en3+/vnp8bjF2i/L3kz1+Nz3+uHBwsO6u7ze6pLP4VzT42vu9Mfy99bn8LH6/O3h7J3Y2dnY5oDu9Mvj7aXS4mbH3D3Ky8vE2iRym4p7AAAIRUlEQVR4nO2bC1fiPBCGuTQVobRci3ITEEEFV/H//7ivmSRtbl1Q/A6y533O2bMlDWXeTDozSWulAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJdgsp0+7p/e10/t0f3m7tLW/Dib0axuUH1//odUbtvVTJJFpnL+fGnLfobpzJWXqxy9XNq8s+l/lslTGieXNvEs7uZ/1Ucaq9c8V/+Uzk9D4/xq3bg+RR+5cXtpU7/Fy9/vQFPj/aWt/QaLk+WRxMdL2/tlHk53oJA4urTFX+Tua/quz4uTLwvMJF5V1jieBn0SHy5t9uk8fkdgxtXkxa1XYLGs0D8Yje1LW34qM1dbdTZfv7cF86zpqW3xQR3fSq7YuCU6RiM1dZ2+XWrXD36cP6YL6x+vW2MF8V6tzp0vTelLnyWXHKYhJ9Hb4pSFYdp0+jZ537RRqQyy/1l6hpAyzDhaXy+s83f1an3qfGsuepfE05og1Z0Ys6wlcBXeBFk7yxS2+EH0bR3lGGHGo4WfdxoX6kveS94yoTAaao2XU2h40JMAvPXLSCr0O3EQSCcGWmPMgiBgf1MY8Q7f1lHKvebCumfNsMkmqbtDk39l5rlkJ5UCa+GhaI2TQcbQ6Z0rvOHnB2dIKeFDE1gUYndvmz6xyW64T3ncv7/fiNP9+t8GZRiR//i/EwzOFf5PLPS7UDXef9ZLsqHUMy9GZe9ekwuMVjRVw4572uL/Vvhad419Ly1xPkQHfVjchHFgFEaXzIo1XU5HHWSS4tvlMi4Udqhd73h7M0haKyurDlvJoLnq2o1Zz5uDb5wKb1TrfdFUvpBSkXak37sL+5JJZnKQVBoioObNMeW9Fr9N+cFtNhKMZfkkVzig9qxnLztIk0qnF/LYE6XaKK0CxtuCKBwUGleRbGRh09E40W2VgXRaXqXKQtRQbS/3OyFNUhlRWV6k5NmCOrDdbSpmsZstaIgGnVBF5LAlL9FImIphtSBdytZBmDfWosC+LfSSVIXMt9LtUjmN+0YGtYvTm0jefzRbi1hjKoyWZH+pwlqSBLnd4UpcYUxNQSTOSIlNum5WLzGKbbXYNOfeN98+SiQqJ8+NVitfxPQ7VK+xmh5rTIXCD0FaqpAfZ7NWHEZkNk2KgLWGNz2Wl0xdPhVY67bT2TVp6G5Me/a6QpkKKpMSiVLLnVXHmlckzzEa3magxxpHYRAmzVajXGE47DZ2gyjPqwcSMCCxS34c8Nm7iopKaUW/bdqz1k0tSpe9T6KqX0aWQrMeIPNCuuF3RqyxFQaJ8G6ZwlCEEnIcOaaXTw4lJu2Kr7OdbGU8eJlh1lw4Fe1vVY9GT5yp2jm/G2o3HylRscZSmNtaolD5vqu8RQdF4KrJPnyiBCoU7dw1m2mrXn+ObIkqpNih1lwkUpxhB+2D+nlLYaiGukRhqOJ+JIdMVEr5D5GynmyOesNdSc1gGbvRTj1YO8RuPeP5UkxmsFgbf2WrpbCXj0nJLNWdxRXS6XFrIEko1sQi0mTfY2zcWrnra2fGGf5oGxJlnFk4vu1rX1maS6REzSVHYdGnRGE+AkphT6QKRU1NhFaeI7M6oLY6otDK3/rSUZ1xZ6/uQzH8iRzpVlIrYo2VD/NC5VSFNQ8UYpppoLWMrZT/6Uhc6xtomsS6P86Yfu+qRKAPdC3c/YTCnriWQUo3fLfFWJQvScemQnsTij9Y0t2YP45ScabvxFg9lja10SwQseZchQMqdzsm8oaPd6tWj4nyIFxWdN4dhXwrapGfz7O70rF2uxf5MGY+gXJtdK5CCpr6poFN43bAalrqEHhTe7X+WgyB7OCvZ6hzcTVKw1mtokHDyuvwsxXuKB8WmwYxp9K54ejXCowdPqMu1a1eqw7PooOKM57dca0uJdOCVldDhJ7eDyikxFg0j1NOthSLoihVNQ3fArMU+re7+ZNss0NpnNHXFjTKWtnBWTIVa85WSDMkSER2bUbyIj1yW6z50Jylk9KVkrEcrj+JT26c0fMLmWhVvmIdzH/1bIUiIwasuTwMe+RQvuQQGXh86MSNLi2ktIlM2BVKbvij7kOVETy9izV+g1xor16k7MYPKOwwkfSz3EABLKXZkogyijG5QOyZv6/v05iGy4XEs75774kz2j6NiDOhVTmJ3WG2+gGFlW4tKgK0WuTHiR7B3UW+U4Qp5I1HsbT+R3zwxBmtWq+FfCCthJsFCL6kCWt8nyZb2nCFKV/j5Aqb2Uf53IK3Zy297CDM8wJ9PV+IZI4iT0Vhkg/lUDZmrWnLWuJXtP1S/V2aenUhzk7kY7TRPmPk83W+Sx4f/A+XxCOlQ5w/e4rNfvkjp51zQNAHFSwrjSUvBceDof478aGZjDO32/tygme1P/+4n6mN0c9XVbrJKlTbO7Xw7Xn/NpSt/PhlsX172xaVaVkyKVzoPsn5fYhY49u7rrwc0Vctefb0yxDPD33PH46/RHQVLpSVm+dp7p9jU/Q67kLOzPf+z3R2XKDP8b8SqszWr5uHiYgxk8W07dtrcwT67t3fCQUbkQ5ms9ln1Z8YHMreU/iNnPpmqenCxaXN/gITZ7/mBIH949f9RZyQ+WyBr8ev+qv42gu0V/fyJefulOh5vR7kvJyQAHOBV/VuacHTye/qX9GbpSbPp/29xfvVvFfq8nI8Mdar15UlHN7KHuIrfdcXQx02H+V/u1Z9vOIJqrEY+f/+cH3l89Ng+zg33+v+bE//DffpLDb3j/v2fj96nW7/PXUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwLf4Dk3ODuy1ye38AAAAASUVORK5CYII="
          ></img>
        </div>
        <div className={style.containreTicketContext}>
          {ticket.segments.map((segment) => {
            idSegment++;
            //время начала вылета
            let timeStartFlightHour = segment.date.slice(11, 13);
            let timeStartFlightMinetes = segment.date.slice(14, 16);
            // время пеерлета
            let durationHours = Math.floor(segment.duration / 60);
            let durationMinutes =
              Math.floor(segment.duration) - durationHours * 60;
            // количество пересадок
            let countTransplants = segment.stops.length;
            // время прибытия
            let timeEndFlightHour = timeStartFlightHour;
            let timeEndFlightMinuts = timeStartFlightMinetes;
            // остаток времени от времени перелета
            let countBalanceHours = 0;
            let countBalanceMinuts = 0;
            for (let time = 1; time <= durationHours; time++) {
              timeEndFlightHour++;
              if (timeEndFlightHour > 23) {
                countBalanceHours++;
                timeEndFlightHour = countBalanceHours;
              }
            }
            for (let time = 1; time <= durationMinutes; time++) {
              timeEndFlightMinuts++;
              if (timeEndFlightMinuts === 60) {
                countBalanceMinuts++;
                timeEndFlightHour++;
                timeEndFlightMinuts = countBalanceMinuts;
              }
            }
            return (
              <div key={idSegment} className={style.containerContext}>
                <div className={style.CodeCityies}>
                  <div>
                    {segment.destination} - {segment.origin}
                    <div>
                      {timeStartFlightHour}:{timeStartFlightMinetes} -
                      {timeEndFlightHour}:{timeEndFlightMinuts}
                    </div>
                  </div>
                  <div className={style.wayTime}>
                    В ПУТИ
                    <div>
                      {durationHours}ч. {durationMinutes}м.
                    </div>
                  </div>
                  <div>
                    {countTransplants} ПЕРЕСАДОК
                    <div className={style.parentStopCityDiv}>
                      {segment.stops.map((stopCity) => {
                        stopsId++;
                        return <div key={stopsId}>{stopCity},</div>;
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  });
};
export default RenderTicketsCard;
