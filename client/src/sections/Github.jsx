import { useEffect, useState } from "react";
import GithubCard from "../components/ui/GithubCard";
import SectionTitle from "../components/ui/SectionTitle";
import {
    getGithubProfile,
    getRepositories,
} from "../services/githubService";

import "../styles/Github.css";

function Github() {

    const [profile, setProfile] = useState(null);

    const [repos, setRepos] = useState([]);

    useEffect(() => {

        async function loadData() {

            const user = await getGithubProfile();

            const repositories = await getRepositories();

            setProfile(user);

            setRepos(repositories.slice(0,4));
        }

        loadData();

    }, []);

    if (!profile) return <p>Loading...</p>;

    return (

<section id="github">

<SectionTitle

number="05"

title="GITHUB ACTIVITY"

subtitle="Live developer statistics."

/>

<div className="github-grid">

<GithubCard

title="Repositories"

value={profile.public_repos}

/>

<GithubCard

title="Followers"

value={profile.followers}

/>

<GithubCard

title="Following"

value={profile.following}

/>

<GithubCard

title="Public Gists"

value={profile.public_gists}

/>

</div>

<div className="repo-list">

<h3>Latest Repositories</h3>

{

repos.map((repo)=>(

<div key={repo.id}>

• {repo.name}

</div>

))

}

</div>

<a

href={profile.html_url}

target="_blank"

rel="noreferrer"

className="github-btn"

>

Visit GitHub

</a>

</section>

);

}

export default Github;