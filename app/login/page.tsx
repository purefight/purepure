// Click then transform
// Write by Peranat Pure Chantaraniyom

import React from 'react';
import './component/login.css'

const LoginRegister: React.FC = () => {
    

  return (
    <div className="containerLogin" id="containerLogin">
      {/* Register Path */}
      <div className="form-containerLogin sign-up-containerLogin">
        <form action="#" className="formEnter">
          <h1 className="text_h1">สมัครสมาชิก</h1>

          <div className="input-feld">
            {/* Data input email */}
            <div className="inputGroup">
              <input type="text" required autoComplete="off" />
              <label htmlFor="ป้อนอีเมล">อีเมล</label>
            </div>

            {/* Data input email */}
            <div className="inputGroup">
              <input type="text" required autoComplete="off" />
              <label htmlFor="ป้อนอีเมล">อีเมล</label>
            </div>

            {/* Data input email */}
            <div className="inputGroup">
              <input type="text" required autoComplete="off" />
              <label htmlFor="ระหัสผ่าน">ระหัสผ่าน</label>
            </div>
          </div>

          {/* Data input */}
          <span className="text_span">หรือสมัครสมาชิกผ่านทาง</span>

          {/* Icon social */}
          <div className="social-containerLogin">
            <a href="https://www.facebook.com/profile.php?id=100095034428483" className="social">
              <i className="facebookIcon">
                <img width="48" height="48" src="https://img.icons8.com/fluency/48/facebook-new.png" alt="facebook-new" className="responsiveFacebookIcon" />
              </i>
            </a>

            <a href="#" className="social">
              <i className="goolgeIcon">
                <img width="48" height="48" src="https://img.icons8.com/fluency/48/google-logo.png" alt="google-logo" />
              </i>
            </a>

            <a href="#" className="social">
              <i className="appleIcon">
                <img width="48" height="48" src="https://img.icons8.com/glyph-neue/64/mac-os.png" alt="mac-os" />
              </i>
            </a>
          </div>

          {/* Main button sign up */}
          <button className="btnLogin">ลงทะเบียน</button>

          {/* Button go login in mobile */}
          <button className="btn-Register signInButton" id="signInMobile">เข้าสู่ระบบ</button>
        </form>
      </div>

      {/* Login Path */}
      <div className="form-containerLogin sign-in-containerLogin">
        <form action="#" className="formEnter">
          <h1 className="text_h1">เข้าสู่ระบบ</h1>

          <div className="input-feld">
            {/* Data input email */}
            <div className="inputGroup">
              <input type="text" required autoComplete="off" />
              <label htmlFor="อีเมล">อีเมล</label>
            </div>

            {/* Data input email */}
            <div className="inputGroup">
              <input type="text" required autoComplete="off" />
              <label htmlFor="รหัสผ่าน">รหัสผ่าน</label>
            </div>
          </div>

          <a href="" className="text_a">ลืมรหัสผ่าน</a>

          {/* Main button sign in */}
          <button className="btnLogin">เข้าสู่ระบบ</button>

          {/* Data input */}
          <span className="text_span">หรือ</span>

          {/* Icon social */}
          <div className="social-containerLogin">
            <a href="https://www.facebook.com/profile.php?id=100095034428483" className="social">
              <i className="facebookIcon">
                <img width="48" height="48" src="https://img.icons8.com/fluency/48/facebook-new.png" alt="facebook-new" />
              </i>
            </a>

            <a href="#" className="social">
              <i className="goolgeIcon">
                <img width="48" height="48" src="https://img.icons8.com/fluency/48/google-logo.png" alt="google-logo" />
              </i>
            </a>

            <a href="#" className="social">
              <i className="appleIcon">
                <img width="48" height="48" src="https://img.icons8.com/glyph-neue/64/mac-os.png" alt="mac-os" />
              </i>
            </a>
          </div>

          {/* button under text */}
          <button className="btn-Register signUpButton" id="signUp1">ลงทะเบียน</button>
        </form>
      </div>

      {/* Opposite Path */}
      <div className="overlay-containerLogin">
        <div className="overlay">
          {/* Text register */}
          <div className="overlay-panel overlay-left">
            <h1 className="text_h1_Nomain">ลงทะเบียน</h1>
            <p className="text_p">หากท่านลงทะเบียนเรียบร้อยแล้วและต้องการที่จะเข้าสู่ระบบ โปรดคลิกปุ่มด้านล้าง<br />เพื่อเข้าสู่หน้าเข้าสู่ระบบ</p>

            {/* button under text */}
            <button className="btnGhost signInButton" id="signInPc">เข้าสู่ระบบ</button>
          </div>

          {/* Text login */}
          <div className="overlay-panel overlay-right">
            <h1 className="text_h1_Nomain">ลงทะเบียน</h1>
            <p className="text_p">หากท่านยังไม่ได้ลงทะเบียน<br/>ขอยินดีต้อนรับสู่เว็ปไซต์ของเราคลิกด้านล่างเพื่อลงทะเบียน</p>

            {/* button under text */}
            <button className="btnGhost signUpButton" id="signUpPc">ลงทะเบียน</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginRegister;
