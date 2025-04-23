
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface AttorneyProfileProps {
  name: string;
  image: string;
  bio: string;
}

const AttorneyProfile: React.FC<AttorneyProfileProps> = ({ name, image, bio }) => {
  return (
    <Card className="mb-8 bg-woodlands-darkpurple border-woodlands-gold/20 overflow-hidden">
      <CardHeader className="p-0">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 shrink-0">
            <img 
              src={image} 
              alt={name} 
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="w-full md:w-2/3 p-6">
            <h3 className="text-3xl font-serif text-woodlands-gold mb-4">{name}</h3>
            <div className="text-woodlands-cream space-y-4 text-base leading-relaxed">
              {bio.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4 last:mb-0">{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};

export default AttorneyProfile;
