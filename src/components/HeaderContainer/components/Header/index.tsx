import { Outlet, useLocation } from 'react-router-dom';
import { Avatar, Layout } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { THeader } from '../../types';

import s from './HeaderLayout.module.scss';

const HeaderLayout: React.FC<THeader> = (props) => {
  const { Header } = Layout;
  const location = useLocation();
  const login = location?.pathname === '/login' ?? null;

  return (
    <Header className="header">
      {!login && (
        <header className={s.header}>
          <div className={s.wrapper_logo}>
            <img
              className={s.logo}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1024px-Bitcoin.svg.png"
              alt=""
            />
            <div className={s.title}>Cryptoella</div>
          </div>

          <div className={s.loginBlock}>
            {props.isAuth && (
              <div className={s.loginName}>
                <Avatar icon={<UserOutlined />} />
                <div className={s.login}>{props.login}</div>
                <Stack>
                  <Button variant="contained" onClick={props.logout}>
                    Log out
                  </Button>
                </Stack>
              </div>
            )}
          </div>
        </header>
      )}
      <div className={s.mainContent}>
        <Outlet />
      </div>
    </Header>
  );
};

export default HeaderLayout;
