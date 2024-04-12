import React, { useEffect, useState } from 'react';
import { Avatar, Button, List, Skeleton } from 'antd';
import Search from '../components/Search';
const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;

const ProfileReview = ({DATA}) => {
    const [initLoading, setInitLoading] = useState(true);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [list, setList] = useState([]);

    function handleSearch(searchText) {
        const filtered = data.filter(item => item.name.toLowerCase().includes(searchText.toLowerCase()));
        setData(filtered);
        setList(filtered);
      }
    useEffect(() => {
        fetch(fakeDataUrl)
        .then((res) => res.json())
        .then((res) => {
            setInitLoading(false);
            setData(res.results);
            setList(res.results);
        });
    }, []);
    const onLoadMore = () => {
        setLoading(true);
        setList(
        data.concat(
            [...new Array(count)].map(() => ({
            loading: true,
            name: {},
            picture: {},
            })),
        ),
        );
        fetch(fakeDataUrl)
        .then((res) => res.json())
        .then((res) => {
            const newData = data.concat(res.results);
            setData(newData);
            setList(newData);
            setLoading(false);
            // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
            // In real scene, you can using public method of react-virtualized:
            // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
            window.dispatchEvent(new Event('resize'));
        });
    };
    const loadMore =
        !initLoading && !loading ? (
        <div
            style={{
            textAlign: 'center',
            marginTop: 12,
            height: 32,
            lineHeight: '32px',
            }}
        >
            <Button onClick={onLoadMore}>loading more</Button>
        </div>
        ) : null;
    return (
        <div style={{width:'100%'}}>
            <div className='mini-navbar m-auto mt-0 '>
                <Search onClick={handleSearch} onKeyDown={handleSearch} value=" "/>
            </div>
            <List
                className="demo-loadmore-list"
                loading={initLoading}
                itemLayout="horizontal"
                loadMore={loadMore}
                dataSource={list}
                size="small"
                renderItem={(item) => (
                    <List.Item
                    actions={[<a key="list-loadmore-edit">reply</a>, <a key="list-loadmore-more">2024-04-07</a>]}
                    >
                        <Skeleton avatar title={false} loading={item.loading} active>
                            <List.Item.Meta
                            avatar={<Avatar src={item.picture.large} />}
                            title={<a href="https://ant.design">{item.name?.last}</a>}
                            description={<small>Ant Design, a design language for ...</small>}
                            />
                        </Skeleton>
                    </List.Item>
                )}
            />
        </div>
        
  );
};
export default ProfileReview;