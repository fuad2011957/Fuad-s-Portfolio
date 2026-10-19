(() => {
  const root = document.documentElement;
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const preloader = document.querySelector('.site-preloader');
  const preloaderCount = document.querySelector('.site-preloader__count');

  const hidePreloader = () => {
    if (!preloader) return;
    const started = performance.now();
    const frame = (time) => {
      const progress = Math.min((time - started) / 760, 1);
      if (preloaderCount) preloaderCount.textContent = String(Math.round(progress * 100)).padStart(3, '0');
      if (progress < 1) requestAnimationFrame(frame);
      else {
        preloader.classList.add('is-hidden');
        setTimeout(() => preloader.remove(), 650);
      }
    };
    requestAnimationFrame(frame);
  };

  if (document.readyState === 'complete') hidePreloader();
  else addEventListener('load', hidePreloader, { once: true });

  const projectCards = document.querySelectorAll('.proj-card');
  if (matchMedia('(hover: hover) and (pointer: fine)').matches && !reduceMotion) {
    projectCards.forEach((card) => {
      card.addEventListener('pointermove', (event) => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - .5;
        const y = (event.clientY - rect.top) / rect.height - .5;
        card.style.setProperty('--tilt-x', `${-y * 5}deg`);
        card.style.setProperty('--tilt-y', `${x * 6}deg`);
        card.style.setProperty('--shine-x', `${(x + .5) * 100}%`);
      });
      card.addEventListener('pointerleave', () => {
        card.style.removeProperty('--tilt-x');
        card.style.removeProperty('--tilt-y');
      });
    });
  }

  const status = document.getElementById('githubStatus');
  const activity = document.getElementById('githubActivity');
  const setText = (id, value) => {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  };
  const days = Array.from({ length: 56 }, (_, index) => {
    const date = new Date();
    date.setDate(date.getDate() - (55 - index));
    return date.toISOString().slice(0, 10);
  });
  const renderActivity = (events = []) => {
    if (!activity) return;
    const counts = new Map();
    events.forEach((event) => {
      if (event.type !== 'PushEvent') return;
      const day = event.created_at.slice(0, 10);
      counts.set(day, (counts.get(day) || 0) + 1);
    });
    activity.innerHTML = days.map((day) => `<i class="l${Math.min(counts.get(day) || 0, 4)}" title="${day}: ${counts.get(day) || 0} pushes"></i>`).join('');
    return [...counts.values()].reduce((sum, count) => sum + count, 0);
  };
  const loadGithub = async () => {
    try {
      const [userResponse, eventsResponse] = await Promise.all([
        fetch('https://api.github.com/users/fuad2011957'),
        fetch('https://api.github.com/users/fuad2011957/events/public?per_page=100')
      ]);
      if (!userResponse.ok || !eventsResponse.ok) throw new Error('GitHub unavailable');
      const user = await userResponse.json();
      const events = await eventsResponse.json();
      setText('githubRepos', user.public_repos ?? '—');
      setText('githubFollowers', user.followers ?? '—');
      setText('githubEvents', renderActivity(events));
      if (status) status.textContent = `Updated from GitHub · ${new Date().toLocaleDateString()}`;
    } catch {
      renderActivity();
      if (status) status.textContent = 'Activity graph ready · GitHub will reconnect when available';
    }
  };
  loadGithub();

  const terminal = document.getElementById('portfolioTerminal');
  if (terminal) {
    const input = terminal.querySelector('input');
    const output = terminal.querySelector('.terminal__output');
    const answers = {
      help: 'Commands: skills · projects · services · contact · clear',
      skills: 'HTML, CSS, JavaScript, responsive UI, interaction design and AI-assisted workflows.',
      projects: 'Seven selected builds are above. Each one has a live link and source code.',
      services: 'Landing pages, portfolios, business websites, responsive frontend and motion polish.',
      contact: 'Telegram: @xddopper · Email: fuadalizade626@gmail.com',
      about: 'Fuad is a front-end developer from Baku who turns ideas into interfaces.'
    };
    const addLine = (html) => {
      const line = document.createElement('p');
      line.innerHTML = html;
      output.append(line);
      output.scrollTop = output.scrollHeight;
    };
    terminal.addEventListener('click', () => input.focus());
    input.addEventListener('keydown', (event) => {
      if (event.key !== 'Enter') return;
      const command = input.value.trim().toLowerCase();
      if (!command) return;
      addLine(`<span>fuad@portfolio:~$</span> ${command}`);
      if (command === 'clear') output.innerHTML = '';
      else addLine(answers[command] || `Command not found: ${command}. Type <b>help</b>.`);
      input.value = '';
    });
  }

  const createConfetti = () => {
    const colors = ['#ff3b3b', '#ffcf3f', '#fff4f4', '#8b0000'];
    const group = document.createElement('div');
    group.className = 'confetti-burst';
    Array.from({ length: 46 }, (_, index) => {
      const piece = document.createElement('i');
      piece.style.setProperty('--x', `${(Math.random() - .5) * 110}vw`);
      piece.style.setProperty('--y', `${Math.random() * 72 + 16}vh`);
      piece.style.setProperty('--r', `${Math.random() * 680 - 340}deg`);
      piece.style.setProperty('--d', `${500 + Math.random() * 550}ms`);
      piece.style.background = colors[index % colors.length];
      group.append(piece);
    });
    document.body.append(group);
    setTimeout(() => group.remove(), 1700);
  };
  const modal = document.getElementById('contactModal');
  if (modal) {
    new MutationObserver(() => {
      if (modal.classList.contains('is-open')) createConfetti();
    }).observe(modal, { attributes: true, attributeFilter: ['class'] });
  }

  const activateHackMode = () => {
    root.classList.toggle('hack-mode');
    const active = root.classList.contains('hack-mode');
    document.body.classList.add('hack-flash');
    setTimeout(() => document.body.classList.remove('hack-flash'), 500);
    if (terminal) {
      const output = terminal.querySelector('.terminal__output');
      const line = document.createElement('p');
      line.innerHTML = active ? '<b>HACK MODE ENABLED.</b> Signal boosted.' : 'Hack mode disabled.';
      output.append(line);
    }
  };
  const code = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  let position = 0;
  document.addEventListener('keydown', (event) => {
    position = event.key === code[position] ? position + 1 : 0;
    if (position === code.length) {
      activateHackMode();
      position = 0;
    }
  });
  const logos = document.querySelectorAll('.header-logo a, .mob-drawer__logo');
  let taps = 0;
  let tapTimer;
  logos.forEach((logo) => logo.addEventListener('click', (event) => {
    if (logo.tagName === 'A') event.preventDefault();
    taps += 1;
    clearTimeout(tapTimer);
    tapTimer = setTimeout(() => { taps = 0; }, 1300);
    if (taps === 5) {
      activateHackMode();
      taps = 0;
    }
  }));
})();
