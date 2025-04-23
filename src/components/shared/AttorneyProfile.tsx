
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface AttorneyProfileProps {
  name: string;
  image: string;
  bio: string;
}

const AttorneyProfile: React.FC<AttorneyProfileProps> = ({ name, image, bio }) => {
  return (
    <Card className="mb-8 bg-woodlands-darkpurple border-woodlands-gold/20">
      <CardHeader className="flex flex-col md:flex-row gap-6 items-center pb-2">
        <div className="w-64 h-64 shrink-0">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <h3 className="text-3xl font-serif text-woodlands-gold text-center md:text-left">{name}</h3>
      </CardHeader>
      <CardContent>
        <div className="text-woodlands-cream space-y-4 whitespace-pre-wrap">
          {bio.split('\n\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AttorneyProfile;
