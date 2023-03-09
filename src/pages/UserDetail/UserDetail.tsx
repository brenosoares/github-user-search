import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getUser, getUserRepos } from '../../services/api';
import { User, UserRepo } from '../../model/user';
import iconLink from '../../assets/icon-link.svg';
import iconFollowers from '../../assets/icon-followers.svg';
import iconRepo from '../../assets/icon-repo.svg';
import iconStar from '../../assets/icon-star.svg';
import iconFork from '../../assets/icon-fork.svg';
import sampleImg from '../../assets/sample.png'
import { BackButton, UserCardDetail, UserCardDetailHeader, UserCardDetailHeaderContent, UserCardDetailImage, UserCardDetailInfo, UserInfos, UserInfosIcon, UserInfosText, UserRepoItem, UserRepoItemContent, UserRepoItemFooter, UserRepoItemFooterInfos, UserRepoItemHeader, UserRepoList } from './style';
import Navigation from '../../components/Navigation/Navigation';

const UserDetail: React.FunctionComponent = () => {
    let navigate = useNavigate();
    const { username } = useParams();
    const [userDetail, setUserDetail] = useState<User>();
    const [userRepos, setUserRepos] = useState<Array<UserRepo>>();
    const [page, setPage] = useState<number>(1);
    const itemsPerPage = 10;
    

    /* eslint-disable no-unused-expressions */
    useEffect(() => {
        if(username) {
        getUser(username)
            .then(res => {
                setUserDetail(res.data);
            }).catch(err => {
                console.log(err);
            });
        getUserRepos(username, itemsPerPage, page)
            .then(res => {
                setUserRepos(res.data);
            }).catch(err => {
                console.log(err);
            });
        }
    }, [username, page]);
    

  return (
    <UserCardDetail>
        <UserCardDetailHeader>
            <BackButton onClick={ () => navigate(-1)}>
            ← back
            </BackButton>
            <UserCardDetailHeaderContent>
                <UserCardDetailImage src={userDetail?.avatar_url || sampleImg} alt="Image Profile" />
                <UserCardDetailInfo>
                    <h1>{userDetail?.name}</h1>
                    <UserInfos>
                        <div className="text"> {userDetail?.bio}</div>
                    </UserInfos>
                    <UserInfos>
                        <UserInfosIcon><img src={iconLink} alt="Link" /></UserInfosIcon>
                        <a href={userDetail?.html_url} target="_blank" rel='noreferrer'>{userDetail?.html_url}</a>
                    </UserInfos>
                    <UserInfos>
                        <UserInfosIcon><img src={iconRepo} alt="Repositories" /></UserInfosIcon>
                        <UserInfosText>{userDetail?.public_repos} Repositories</UserInfosText>  
                    </UserInfos>
                    <UserInfos>
                        <UserInfosIcon><img src={iconFollowers} alt="Followers and Following" /></UserInfosIcon>
                        <UserInfosText> {userDetail?.public_repos} Followers • {userDetail?.followers} Following</UserInfosText>
                    </UserInfos>
                </UserCardDetailInfo>
            </UserCardDetailHeaderContent>

        </UserCardDetailHeader>
           
        <UserRepoList>
            {userRepos && userRepos.map((repo: any) => (
                <UserRepoItem key={repo.id}>
                    <UserRepoItemHeader>
                        <img src={iconRepo} alt="Repositories" /> <a href={repo?.html_url} target="_blank" rel='noreferrer'>{repo.name}</a>
                    </UserRepoItemHeader>
                    <UserRepoItemContent>
                        {repo.description}
                    </UserRepoItemContent>
                    <UserRepoItemFooter>
                        <UserRepoItemFooterInfos>
                            <img src={iconStar} alt="Star Project" /> {repo?.stargazers_count}
                        </UserRepoItemFooterInfos>
                        <UserRepoItemFooterInfos>
                            <img src={iconFork} alt="Fork Project" /> {repo?.forks_count}
                        </UserRepoItemFooterInfos>
                        <UserRepoItemFooterInfos>
                            {repo.language ? `- ${repo?.language}` : null}
                        </UserRepoItemFooterInfos>
                    </UserRepoItemFooter>
                </UserRepoItem>
            ))}
        </UserRepoList>
        <Navigation currentPage={page} perPage={itemsPerPage} onPageChanged={(pageCurr)=> setPage(pageCurr)} totalItems={userDetail?.public_repos || 0} />
    </UserCardDetail>
  );
};

export default UserDetail;
