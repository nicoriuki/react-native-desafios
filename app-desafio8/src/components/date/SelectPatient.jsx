import SelectDropdown from 'react-native-select-dropdown';
import React, { useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import { styles } from '../../styles/style';
import { useDispatch, useSelector } from 'react-redux';
import { getPatient } from './../../store/actions/patientsActions';
const countries = ['Egypt', 'Canada', 'Australia', 'Ireland'];
function SelectPatient() {
      const dispatch = useDispatch();
      const patients = useSelector((state) => state.patients.list);
      useEffect(() => {
            dispatch(getPatient());
      }, []);
      return (
            <SelectDropdown
                  data={patients}
                  onSelect={(selectedItem, index) => {
                        console.log(selectedItem, index);
                  }}
                  buttonTextAfterSelection={(selectedItem, index) => {
                        // text represented after item is selected
                        // if data array is an array of objects then return selectedItem.property to render after item is selected
                        return selectedItem.nombre;
                  }}
                  rowTextForSelection={(item, index) => {
                        // text represented for each item in dropdown
                        // if data array is an array of objects then return item.property to represent item in dropdown
                        return item.nombre, item.email;
                  }}
            />
      );
}

export default SelectPatient;
