<template>
  <div>
    <div>
      <div class="logo">
        <img
          src="https://assets.maizuo.com/h5/mz-auth/public/app/img/logo.19ca0be.png"
          alt=""
        />
      </div>
      <div class="login-from">
        <form>
          <div class="from-group">
            <input
              type="tel"
              maxlength="13"
              placeholder="手机号"
              class="from-input"
            />
            <div class="from-get">获取验证码</div>
          </div>
          <div class="from-group">
            <input placeholder="验证码" class="from-input" />
          </div>
          <div class="from-ent">
            <span style="opacity: 0.3">登录</span>
          </div>
        </form>
        <div class="from-en">
          <span>收不到验证码</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
.logo {
  margin: 79px auto 40px;
  text-align: center;
  height: 60px;
  line-height: 60px;
}
.logo img {
  height: 60px;
}
.login-from {
  position: relative;
  width: 100%;
}
.from-group {
  //   width: 100%;
  position: relative;
  margin: 0 25px;
  line-height: 55px;
}
.from-input {
  height: 15px;
  line-height: 15px;
  padding: 20px 0;
  width: 100%;
  font-size: 15px;
  color: #191a1b;
  border: 0;
  outline-width: 0;
  //   background-color: aqua;
}
.from-get {
  position: absolute;
  right: 0;
  top: 13px;
  width: 90px;
  text-align: right;
  float: right;
  color: #bdc0c5 !important;
  line-height: 30px;
  text-align: right;
  font-size: 13px;
}
.from-group::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: rgb(241, 241, 241);
}
.from-ent {
  line-height: 45px;
  font-size: 16px;
  margin: 70px 25px 0;
  border-radius: 3px;
  text-align: center;
  background-color: #ff5f16;
  height: 44px;
  color: #fff;
}
.from-en {
  text-align: right;
  margin: 15px 25px 0;
  color: #797d82;
  font-size: 13px;
}
</style>
