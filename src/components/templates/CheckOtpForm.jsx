import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { checkOtp } from "services/auth";
import { setCookie } from "utils/cookie";
import { getProfile } from "services/user";

import Styles from "./CheckOtpForm.module.css";

function CheckOtpForm({ code, setCode, setStep, mobile }) {
  const Navigate = useNavigate();
  const { refetch } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
  });

  const submitHandler = async (event) => {
    event.preventDefault();
    if (code.length !== 5) return;
    const { response, error } = await checkOtp(mobile, code);
    if (response) {
      setCookie(response.data);
      Navigate("/");
      refetch();
    }
    if (error) console.log(error.response.data.message);
  };

  return (
    <form onSubmit={submitHandler} className={Styles.form}>
      <p>تایید کد پیامک شده</p>
      <p>کد پیامک شده به شماره "{mobile}" را وارد کنید</p>
      <label htmlFor="">کد تایید را وارد کنید</label>
      <input
        type="text"
        name="code"
        id="input"
        placeholder="کد تایید"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <div className={Styles.btnHolder}>
        <button type="submit">ورود</button>
        <button onClick={() => setStep(1)} className={Styles.backButton}>تغییر شماره موبایل</button>
      </div>
    </form>
  );
}

export default CheckOtpForm;
