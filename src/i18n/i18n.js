import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
const resources = {
  en: {
    translation: {
      'Suggested accounts': 'Suggested accounts',
      'Following accounts': 'Following accounts',
      'Search accounts and videos': 'Search accounts and videos',
      'Log in to follow creators, like videos, and view comments.':
        'Log in to follow creators, like videos, and view comments.',
      'See all': 'See all',
      'See less': 'See Less',
      Discover: 'Discover',
      Upload: 'Upload',
      Login: 'Login',
      Liked: 'Liked',
      Following: 'Following',
      Likes: 'Likes',
      'For you': 'For you',
      Bio: 'Bio',
      'Profile photo': 'Profile photo',
      Cancel: 'Cancel',
      Save: 'Save',
      'View profile': 'View profile',
      Messages: 'Messages',
      'Get coin': 'Get coin',
      Setting: 'Setting',
      'Edit profile': 'Edit profile',
      'Feed back and help': 'Feed back and help',
      Language: 'Language',
      'Keyboard shortcuts': 'Keyboard shortcuts',
      'Dark mode': 'Dark mode',
      'Accounts you follow will appear here': 'Accounts you follow will appear here'
    }
  },
  vi: {
    translation: {
      'Suggested accounts': 'Tài khoản được đề xuất',
      'Following accounts': 'Các tài khoản đang follow',
      'Search accounts and videos': 'Tìm kiếm tài khoản và video',
      'Log in to follow creators, like videos, and view comments.':
        'Đăng nhập để follow các tác giả, thích video và xem bình luận.',
      'See all': 'Xem tất cả',
      'See less': 'Ẩn bớt',
      Discover: 'Khám phá',
      Upload: 'Tải lên',
      Login: 'Đăng Nhập',
      Liked: 'Đã thích',
      Following: 'Đang Follow',
      Likes: 'Thích',
      'For you': 'Dành cho bạn',
      Bio: 'Tiểu sử',
      'Profile photo': 'Ảnh hồ sơ',
      Cancel: 'Hủy',
      Save: 'Lưu',
      'Get coin': 'Nhận xu',
      'View profile': 'Xem hồ sơ',
      Messages: 'Tin Nhắn',
      Setting: 'Cài đặt',
      'Edit profile': ' Sửa hồ sơ',
      'Feed back and help': 'Phản hồ và trợ giúp',
      'Keyboard shortcuts': 'Phím tắt trên màn hình',
      Language: 'Ngôn ngữ',
      'Dark mode': 'Chế độ tối',
      'Accounts you follow will appear here': 'Những tài khoản bạn follow sẽ được xuất hiện tại đây'
    }
  }
}
i18n.use(initReactI18next).init({
  resources,
  lng: 'vi',
  fallbackLng: 'vi',
  interpolation: {
    escapeValue: false // react already safes from xss
  }
})
