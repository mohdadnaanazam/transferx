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
      <PopoverContent className="w-[200px]">
        <div className="grid gap-4">
          <div className="grid gap-2">
            <div className="grid gap-2">
              {links.map((link) => (
                <button key={link.index} className="flex justify-between items-center w-full">
                  <span className="text-sm">{link.text}</span>
                  <p>{link.icon}</p>
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
