import Body from 'components/Body';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Community from 'pages/Community';
import Home from 'pages/Home';
import News from 'pages/News';
import Support from 'pages/Support';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function Router() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Body />}>
                    <Route index element={<Home />} />
                    <Route path={'/news'} element={<News />} />
                    <Route path={'/support'} element={<Support />} />
                    <Route path={'/community'} element={<Community />} />
                </Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}