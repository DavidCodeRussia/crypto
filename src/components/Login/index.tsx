import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { login } from '../../redux/auth-reducer';
import LoginReduxForm from './components/LoginReduxForm';
import { TLoginMapStateToProps, TLoginMapDispatchToProps, TFormData, TLoginProps } from './types';
import { AppStateType } from '../../redux/redux-store';
import s from './Login.module.scss';

const Login: React.FC<TLoginProps> = ({ captcha, isAuth, login }) => {
  const onSubmit = (formData: TFormData) => {
    login(formData.email, formData.password, formData.rememberMe, formData.captcha);
  };

  if (isAuth) {
    return <Navigate to={'/profile'} />;
  }

  return (
    <div className={s.form_wrapper}>
      <div className={s.form}>
        <h1 className={s.login}>
          Login
          <br />
          to
          <br />
          Cryptoella
        </h1>
        <LoginReduxForm onSubmit={onSubmit} captcha={captcha} />

        {!captcha && (
          <div>
            Don't have account yet ? Click here to{' '}
            <a href="https://social-network.samuraijs.com/signUp" className={s.link_reg}>
              Sign Up
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default connect<TLoginMapStateToProps, TLoginMapDispatchToProps, unknown, AppStateType>(
  (state: AppStateType): TLoginMapStateToProps => ({
    isAuth: state.auth.isAuth,
    captcha: state.auth.captcha,
  }),
  (): TLoginMapDispatchToProps => ({
    login: login,
  }),
)(Login);
