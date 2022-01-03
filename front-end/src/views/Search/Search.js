import { Typography, Divider, Card } from "antd";
import SearchMap from "../../components/searchMap/SearchMap";

const { Title, Paragraph } = Typography;

function Search () {

    return (
        <div style={{paddingBottom:'60px', backgroundColor:'#F0F0F0'}}>
            <Title level={2} style={{textAlign:'center'}}><b className="bolded">GPU</b>Map</Title>
            <Divider>Search</Divider>
            <Paragraph style={{textAlign:'center'}}>
                Search for locations of graphics cards near you!
                GPUs are filterable by location, model, and price.
            </Paragraph>

            <Card style={{borderRadius: "20px", border: '1px solid gainsboro', margin:'16px'}}>
                <Title level={4} style={{textAlign:'center'}}>Visualization</Title>
                <Divider></Divider>
                <SearchMap/>
            </Card>
        </div>
    );
}

export default Search;