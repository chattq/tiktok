export const rules = {
  email: {
    required: {
      value: true,
      message: 'Vui lòng điền đầy đủ email'
    },
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'Vui lòng điền đúng định dạng email'
    }
  },
  password: {
    required: {
      value: true,
      message: 'Vui lòng điền đầy đủ password'
    },
    maxLength: {
      value: 12,
      message: 'Mật khẩu ko quá 12 kí tự'
    },
    minLength: {
      value: 6,
      message: 'Mật khẩu phải lớn hơn 6 kí tự'
    }
  }
}

// password: {
//   required: {
//     value: true,
//     message: 'Vui lòng điền đầy đủ password'
//   },
//   pattern: {
//     value: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
//     message: 'Vui lòng điền đúng định dạng password'
//   }
// }
