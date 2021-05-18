import React, {ChangeEvent} from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {changeThemeC, ChangeThemeType} from "./bll/themeReducer";
import {AppStoreType} from "../h10/bll/store";

const themes = ['dark', 'red', 'some'];

function HW12() {
    const theme = useSelector<AppStoreType,string>(state=>state.theme.theme); // useSelector
const dispatch=useDispatch();
    // useDispatch, onChangeCallback
const onChangeCallback=(newTheme:string)=>{
    dispatch(changeThemeC(newTheme))
}
    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>
            <SuperRadio name={'radio1'} options={themes} value={theme}
                        onChangeOption={onChangeCallback}/>
            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
