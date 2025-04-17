import { Redirect } from 'expo-router';

export default function Index() {
  // Always redirect to auth flow
  return <Redirect href="/auth" />;
} 