
import { Container } from 'unstated';

type UserState = {
  isLog_In: boolean
};

class UserContainer extends Container<UserState> {
  state = {
    isLog_In: false
  };

  setDang_Nhap(val){
    this.setState(
        state => {
          return { isLog_In: val };
        },
        () => {
          console.log('Updated!');
        }
      );
  }
}


export default UserContainer