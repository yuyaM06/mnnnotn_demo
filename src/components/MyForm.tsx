import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, FormGroup, Col, FormLabel, Button, ButtonToolbar } from 'react-bootstrap';

const MyForm = (props: any) => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup controlId={'id'}>
        <Col as={FormLabel} sm={2}>ユーザ名もしくはID</Col>
        <Col sm={5}>
          <Field
            id={'id'}
            name="id"
            component="input"
            type="text"
            placeholder="UserID"
            className={'form-control'}
          />
        </Col>
      </FormGroup>
      <FormGroup controlId={'password'}>
        <Col as={FormLabel} sm={2}>パスワード</Col>
        <Col sm={5}>
          <Field
            id={'password'}
            name="password"
            component="input"
            type="text"
            placeholder="Password"
            className={'form-control'}
          />
        </Col>
      </FormGroup>
      <FormGroup>
        <Col sm={5}>
          <ButtonToolbar>
            <Button variant={'primary'} type="submit" disabled={pristine || submitting}>Login</Button>
            <Button type="button" disabled={pristine || submitting} onClick={reset}>Clear</Button>
          </ButtonToolbar>
        </Col>
      </FormGroup>
    </Form>
  );
};

export default reduxForm({
  form: 'myForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  // validate: myValidation,
  //initialValues: { name: 'デフォルト表示' },
  // asyncValidate,
  //asyncBlurFields: ['phone']
})(MyForm);
