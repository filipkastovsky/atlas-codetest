import React from 'react';
import { Tree } from './_components/Tree/Tree';
import { FileView } from './_components/FileView';
import { PageContainer } from '../../PageContainer';
import { DashboardContainer } from './_components/DashboardContainer';
import { Container } from '../../Container';
import { Colors } from '../../../theme/Colors';
import { Column } from '../../Column';
import { AppBar } from './_components/AppBar';

export const Dashboard = () => {
    return (
        <PageContainer>
            <AppBar />
            <DashboardContainer>
                <Container bg={Colors.BROWN_DARK} flex={1}>
                    <Tree />
                </Container>
                <Column flex={5}>
                    <FileView />
                </Column>
            </DashboardContainer>
        </PageContainer>
    );
};
