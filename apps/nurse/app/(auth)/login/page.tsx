import LoginForm from './_components/login-form';

// async function textuserCreate() {
//   const res = await auth.api.signUpEmail({
//     body: {
//       name: 'John Doe', // required
//       email: 'john.doe@example.com', // required
//       password: 'admin@123', // required
//       image: 'https://example.com/image.png',
//       callbackURL: 'https://example.com/callback',
//       firstName: 'John',
//       lastName: 'Doe',
//       mobileNumber: '+1234567890',
//       provideService: 'nursing',
//       address: {
//         'address-line1': '123 Main St',
//         'address-line2': 'na',
//         city: 'some city',
//         state: 'some state',
//         'postal-code': '12345',
//       },
//       weeklyWorkingHours: '1-10',
//       willingToStartWorking: 'immediately',
//       isTermsAndConditionAccepted: true,
//     },
//     asResponse: true,
//   });

//   const data = await res.json();
//   console.log('User created:', data);
// }

export default function SignInPage() {
  return <LoginForm />;
}
