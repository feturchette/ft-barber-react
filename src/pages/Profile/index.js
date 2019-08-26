import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input } from "@rocketseat/unform";

import { Container } from "./styles";
import { signOut } from "~/store/modules/auth/actions";
import { updateProfileRequest } from "~/store/modules/user/actions";
import AvatarInput from "./AvatarInput/index";

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }
  function handleSignOut(data) {
    dispatch(signOut(data));
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <AvatarInput name="avatar_id" />
        <Input name="name" placeholder="Full Name" />
        <Input name="email" type="email" placeholder="Email Address" />
        <hr />
        <Input name="oldPassword" type="password" placeholder="Old password" />
        <Input name="password" type="password" placeholder="New Password" />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
        />
        <button type="submit">Update Profile</button>
      </Form>
      <button type="button" onClick={handleSignOut}>
        Log out
      </button>
    </Container>
  );
}
