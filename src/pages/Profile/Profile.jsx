import React from 'react'

export default function Profile() {
  return (
    <div>
      Profile
      <a href=''>chúng ta không thuốc</a>
      <Controller
        control={control}
        name='dateOfBirth'
        render={({ field }) => (
          <DateSelect errorMessage={errors.dateOfBirth?.message} onChange={field.onChange} value={field.value} />
        )}
      ></Controller>
    </div>
  )
}
