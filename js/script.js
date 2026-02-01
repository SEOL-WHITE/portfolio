const fileContent = {
    about: `/**
 Developer Profile
 개발자 프로필
 **/

const developer = {
    name: "설백 (SEOL-WHITE)",
    role: "IT Generalist & Full Stack Developer",
    location: "Gyeongju, Korea"
};
`,
    skills: `const skills = {
    "frontend": ["HTML5", "CSS3", "JavaScript"],
    "backend": ["NodeJS"], 
    "database": ["MariaDB"],
    "languages": ["C++", "Java", "Python"],
    "tools": ["Git", "VS Code", "Visual Studio"]
};
    `,
    projects: `const projects = {
    "Deredoro (2026.02.04)": ["JavaFX", "개인 커스텀이 가능한 윈도우 전용 뽀모도로 프로그램 | POMODORO program for Window with personal customizing"],
    "projects2": [],
    "projects3": []
};
    `,
    experiences: `const experiences = {
    "SystemAssistant (2023.09 - 2025.08)": [
        ["2023.09 - 2025.09", "IT 인프라 및 컴퓨터 실습실 관리 | IT Infrastructure & Computer Lab Management"],
        ["2023.09 - 2023.12", "업무 인수인계 | Take-Over"],
        ["2024.01 - 2024.02", "하드웨어 진단 및 네트워크 설정(IP) | HardWare Diagnostics & Network Setting (IP)"],
        ["2024.03 - 2024.06", "웹 관리 및 시스템 최적화 | Web Administration & System Optimization"],
        ["2024.07 - 2024.08", "하드웨어 감사 및 성능 이슈 해결 | Hardware Audit & Performance Issue Resolution"],
        ["2024.09 - 2024.12", "PC 대규모 교체 작업 | PC Large-scale Replacement"],
        ["2025.01 - 2025.02", "컴퓨터 실습실 세팅 및 네트워크 설정(IP) | Computer Lab Setting & Network Setting (IP)"],
        ["2025.03 - 2025.08", "주변기기 업그레이드, 인수인계 | Peripheral Upgrade & Final Hand-Over"]
    ]
};
    `
};

const codeContent = document.getElementById('code-content');
const tabName = document.getElementById('current-tab-name');
const fileItems = document.querySelectorAll('.file-list li');
const lineNumbers = document.querySelector('.line-numbers');

let typingTimer = null;

function updateLineNumbers(text) {
    const lines = text.split('\n').length;
    lineNumbers.innerHTML = Array.from({ length: lines }, (_, i) => i + 1).join('<br>');
}

function typeCode(text) {
    if (typingTimer) {
        clearTimeout(typingTimer);
    }

    codeContent.textContent = "";
    let i = 0;
    updateLineNumbers(text);
    
    function typing() {
        if (i < text.length) {
            codeContent.textContent += text.charAt(i);
            i++;
            typingTimer = setTimeout(typing, 20);
        }
    }
    typing();
}

fileItems.forEach(item => {
    item.addEventListener('click', () => {
        if (item.classList.contains('active')) return;

        fileItems.forEach(li => li.classList.remove('active'));
        item.classList.add('active');

        const fileName = [...item.childNodes]
            .filter(node => node.nodeType === Node.TEXT_NODE)
            .map(node => node.textContent.trim())
            .join("");

        const fileKey = item.getAttribute('data-file');
        
        tabName.innerText = fileName;
        typeCode(fileContent[fileKey]);
    });
});

window.onload = () => {
    typeCode(fileContent.about);

};


