import { PPPoETable } from './PPPoETable';
import { SettingsForm } from './SettingForm';

const Home = () => {
  return (
    <div className="h-screen flex items-start p-4 sm:p-6 md:p-8 gap-4 justify-start flex-col">
      <SettingsForm />
      <PPPoETable />
    </div>
  );
};

export default Home;
