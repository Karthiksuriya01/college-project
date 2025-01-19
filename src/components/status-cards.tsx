import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

const StatusCards = () => {
  return (
    <div className="flex items-center gap-7 m-4 bg-whit">
        <Card className="bg-black">
            <CardHeader className="flex items-center">
                <CardTitle className="font-semibold">6</CardTitle>
                <CardDescription>Completed</CardDescription>
            </CardHeader>
            
        </Card>
        <Card className="bg-black">
            <CardHeader className="flex items-center">
                <CardTitle className="font-semibold">6</CardTitle>
                <CardDescription>Completed</CardDescription>
            </CardHeader>
            
        </Card>
        <Card className="bg-black">
            <CardHeader className="flex items-center">
                <CardTitle className="font-semibold">6</CardTitle>
                <CardDescription>Completed</CardDescription>
            </CardHeader>
            
        </Card>
    </div>
  );
}

export default StatusCards;
