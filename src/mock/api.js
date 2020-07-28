// eslint-disable-next-line import/no-extraneous-dependencies
import Mock from 'mockjs';

Mock.mock('/user/login', {
  status: 0,
  data: {
    userName: 'xinyanwa',
    password: '3344',
  },
});
