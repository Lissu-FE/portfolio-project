import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import ListWrapper from 'components/common/ListWrapper';
import Profile from 'components/common/Profile';

const ListPage = () => {
    return (
        <PageTemplate>
            <ListWrapper>
                <Profile />
                내용
            </ListWrapper>
        </PageTemplate>
    );
};

export default ListPage;