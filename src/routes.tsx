import Body from 'components/Body';
import Footer from 'components/Footer';
import Header from 'components/Header';
import VideoBackground from 'components/VideoBackground';
import Community from 'pages/Community';
import Home from 'pages/Home';
import Login from 'pages/Login';
import News from 'pages/News';
import Play from 'pages/Play';
import Support from 'pages/Support';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function Router() {
    return (
        <BrowserRouter>
            <Header />
            <VideoBackground />
            <Routes>
                <Route path='/' element={<Body />}>
                    <Route index element={<Home />} />
                    <Route path={'/news'} element={<News />} />
                    <Route path={'/support'} element={<Support />} />
                    <Route path={'/community'} element={<Community />} />
                    <Route path={'/play'} element={<Play />} />
                    <Route path={'/login'} element={<Login />} />
                </Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}