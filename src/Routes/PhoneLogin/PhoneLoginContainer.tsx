import React from 'react';
import { useMutation } from 'react-apollo';
import { RouteComponentProps } from 'react-router-dom';
import { toast } from 'react-toastify';
import PhoneLoginPresenter from './PhoneLoginPresenter';
import { PHONE_SIGN_IN } from './PhoneQueries.queries';

interface IState {
  countryCode: string;
  phoneNumber: string;
}

class PhoneLoginContainer extends React.Component<
  RouteComponentProps<any>,
  IState
> {
  public state = {
    countryCode: '+82',
    phoneNumber: '',
  };

  public render() {
    const [signIn, { loading }] = useMutation(PHONE_SIGN_IN);
    const { countryCode, phoneNumber } = this.state;

    const onSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
      event.preventDefault();
      const { countryCode, phoneNumber } = this.state;

      const isValid = /^\+[1-9]{1}[0-9]{7,11}$/.test(
        `${countryCode}${phoneNumber}`
      );
      if (isValid) {
        signIn({ variables: { phoneNumber: `${countryCode}${phoneNumber}` } });
      } else {
        toast.error('Please write a valid phone number');
      }
    };

    return (
      <PhoneLoginPresenter
        countryCode={countryCode}
        phoneNumber={phoneNumber}
        onInputChange={this.onInputChange}
        onSubmit={onSubmit}
        loading={loading}
      />
    );
  }

  public onInputChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLSelectElement
  > = (event) => {
    const {
      target: { name, value },
    } = event;
    this.setState({
      [name]: value,
    } as any);
  };
}

export default PhoneLoginContainer;
