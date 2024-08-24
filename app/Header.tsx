import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { Organization } from "@clerk/nextjs/server";

const Header = () => {
  return (
    <div className="border-b py-4 placeholder-gray-50">
      <div className="container mx-auto flex justify-between items-center">
        <div>FileDrive</div>
        <div className="flex gap-2">
          <OrganizationSwitcher />
          <UserButton />
        </div>
      </div>
    </div>
  );
};

export default Header;
