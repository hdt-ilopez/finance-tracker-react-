import { LoginForm } from '@/components/LoginForm';
import { SignupForm } from '@/components/SignupForm';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChartArea } from 'lucide-react';

const AuthPage = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="bg-white p-4 drop-shadow-lg rounded-md">
        <div className="flex items-center justify-center my-4">
          <ChartArea size={50} />
          <h2 className="text-2xl font-bold">FinPro</h2>
        </div>
        <Tabs defaultValue="login" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Signup</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <LoginForm />
          </TabsContent>
          <TabsContent value="signup">
            <SignupForm />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AuthPage;
