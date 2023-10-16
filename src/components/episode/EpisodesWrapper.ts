import EpisodeCard from "./EpisodeCard";

const EpisodesWrapper = (): string => {
    
    return /*html*/ `
        <div class="container mt-16 py-10 flex gap-10 flex-wrap justify-center">
        ${EpisodeCard()}
        ${EpisodeCard()}
        ${EpisodeCard()}
        ${EpisodeCard()}
        ${EpisodeCard()}
        ${EpisodeCard()}
        ${EpisodeCard()}
        ${EpisodeCard()}
        ${EpisodeCard()}
        ${EpisodeCard()}
        ${EpisodeCard()}
        ${EpisodeCard()}
        ${EpisodeCard()}
        ${EpisodeCard()}
        ${EpisodeCard()}
        ${EpisodeCard()}
        ${EpisodeCard()}
        ${EpisodeCard()}
        </div>
    `;
}

export default EpisodesWrapper;