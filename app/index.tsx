import { Redirect } from 'expo-router';

export default function Index() {
  // Redirect to the first screen
  return <Redirect href="/auth" />;
} 