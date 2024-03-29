import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Contact from '../Contact/Contact';

import { TContacts } from '../../../../types';
import { TProfileData } from '../../types';
import s from './ProfileData.module.scss';

const ProfileData: React.FC<TProfileData> = (props) => {
  return (
    <div className={s.information}>
      <div>
        <div>
          <b>Looking for a job:</b> {props.profile.lookingForAJob ? 'yes' : 'no'}
        </div>
        <div>
          <b>Birthday:</b> {props.profile.lookingForAJobDescription}
        </div>
        <div>
          <b>About me: </b>
          {props.profile.aboutMe}
        </div>

        <div>
          <b>Contacts:</b>
          {Object.keys(props.profile.contacts).map((key) => {
            return (
              <Contact
                key={key}
                ContactTitle={key}
                ContactValue={props.profile.contacts[key as keyof TContacts]}
              />
            );
          })}
        </div>
      </div>
      {!props.match && (
        <div className={s.block2}>
          <div>
            <Stack
              onClick={() => {
                props.toEditMode(true);
              }}>
              <Button size="small" variant="contained">
                Edit
              </Button>
            </Stack>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileData;
