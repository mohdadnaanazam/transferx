import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface PopoverLink {
  index: number;
  icon: React.ReactNode;
  text: string;
}

interface OperationCardProps {
  triggerIcon: React.ReactNode;
  links: PopoverLink[];
}

const OperationCard: React.FC<OperationCardProps> = ({ triggerIcon, links }) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="cursor-pointer">
          {triggerIcon}
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-72">
        <div className="grid gap-4">
          <div className="grid gap-2">
            <div className="grid gap-4">
              {links.map((link) => (
                <button key={link.index} className="flex justify-start items-center w-full">
                  {link.icon}
                  <span className="ml-4">{link.text}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default OperationCard;
