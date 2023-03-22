import { createContext, useState, useEffect } from 'react';

export const myContext = createContext();
let dateInitialState = {
      nombre: '',
      email: '',
      fecha: '',
      id: '',
};
const DateContext = ({ children }) => {
      const [dateForm, setDateForm] = useState(dateInitialState);
      const [dates, setDates] = useState([]);
      const [confirmSelectDateScreen, setConfirmSelectDateScreen] =
            useState(false);

      const onConfirmDate = () => {
            setDates([...dates, dateForm]);
            setDateForm(dateInitialState);

            setConfirmSelectDateScreen(true);
      };

      const onCancelDate = () => {
            setDateForm(dateInitialState);
            setConfirmSelectDateScreen(true);
      };
      useEffect(() => {
            console.log(dateForm);
      }, [dateForm]);
      return (
            <myContext.Provider
                  value={{
                        onConfirmDate,
                        onCancelDate,
                        dateForm,
                        setDateForm,
                        confirmSelectDateScreen,
                        setConfirmSelectDateScreen,
                        dates,
                  }}
            >
                  {children}
            </myContext.Provider>
      );
};

export default DateContext;
