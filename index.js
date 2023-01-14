import { projectList } from "./public/data/projectList.js";

const projectListContainerEl = document.querySelector(
    ".project-list-container"
);

let html = "";

const handleProjectListRender = () => {
    for (let project in projectList) {
        const projectObj = projectList[project];
        html += `
            <a
                class="project"
                href='${projectObj.link}'
                target='_blank'
            >
                <div class="project-image">
                    <img src="${
                        projectObj.imageSrc ? projectObj.imageSrc : ""
                    }"/>
                </div>
                <p class='project-title'>
                    ${projectObj.name}
                </p>
            </a>
        `;
    }

    return html;
};

const render = () => {
    const projectListHtml = handleProjectListRender();
    projectListContainerEl.innerHTML = projectListHtml;
};

render();
