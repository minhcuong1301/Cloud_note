const Page_login = () => {
  return (
    <div className="box-Login">
      <div className="box-Login_header">
        <p className="text flex">
          <img
            className="box-Login_header_logo"
            src="/images/Group 1.png"
            alt=""
          />
          CLOUD NODE
        </p>
        <p className="text">About CLOUDNODE</p>
        <p className="text">FEATURE</p>
        <p className="text">FOR individual</p>
        <p className="text">For Group</p>
        <p>Help</p>
        <p>Sign in</p>
        <p className="box-Login_header_Download">DownLoad</p>
      </div>
      <div className="box-Login_img">
        <img
          src="https://bonjourcoffee.vn/blog/wp-content/uploads/2020/01/cafe-latte.jpg"
          alt=""
        />
      </div>
      <div className="box-Login_header">
        <p className="flex">
          <img className="Footer-logo" src="/images/Group 1.png" alt="" />
          CLOUD NODE
        </p>
        <h2 className="text">Now we have mobile version for this app</h2>
        <span className="box-Login_header_Download">DownLoad</span>
      </div>
      <div className="box-Login_Form">
        <div className="box-form">
          <div className="box-Login_Form_input">
            <input placeholder="Email or Phone Number"></input>
            <input placeholder="PassWord"></input>
          </div>

          <button className="box-form_BTN">Log in</button>
          <p className="box-form-text">Forget Password?</p>
          <button className="box-form_ADD">Create a new account</button>
        </div>
      </div>
      <div className="box-Login_content">
        <h2 className="text-title flex">
          <img className="logo" src="/images/Group 1.png" alt="" />
          CLOUDNOTE
        </h2>
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
          cupiditate eligendi nam, sapiente animi praesentium nisi officiis
          vitae vel dolorem voluptates culpa reiciendis architecto incidunt
          minus accusantium! Vitae, cumque placeat!
        </h3>
      </div>
    </div>
  );
};
export default Page_login;
