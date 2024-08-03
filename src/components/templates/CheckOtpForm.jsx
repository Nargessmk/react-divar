import { checkOtp } from "services/auth";
import { setCookie } from "utils/cookie";

function CheckOtpForm({ code, setCode, setStep, mobile }) {
  const submitHandler = async (event) => {
    event.preventDefault();
    if (code.length !== 5) return;
    const { response, error } = await checkOtp(mobile, code);
    if (response) setCookie(response.data);
    if (error) console.log(error.response.data.message);
  };

  return (
    <form onSubmit={submitHandler}>
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
      <button type="submit">ورود</button>
      <button onClick={() => setStep(1)}>تغییر شماره موبایل</button>
    </form>
  );
}

export default CheckOtpForm;
