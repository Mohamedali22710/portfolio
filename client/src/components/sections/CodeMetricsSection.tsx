import React from 'react';
import { SectionHeader } from '../ui';
import { GitPullRequest, GitCommit, GitFork, ArrowUpRight, Github } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const CodeMetricsSection: React.FC = () => {
  const { t, data, language, isRTL } = useLanguage();
  const { CODE_METRICS, GITHUB_REPOS, PERSONAL_INFO } = data;

  return (
    <section className="py-16 md:py-24 border-b border-border/70 relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
        <SectionHeader
          tag="08"
          eyebrow={t.codeMetrics.eyebrow}
          title={t.codeMetrics.title}
          description={t.codeMetrics.subtitle}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Mono Metrics Telemetry Readout (5 cols) */}
          <div className="lg:col-span-5 rounded-card bg-surface border border-border p-6 font-mono text-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-border mb-4">
                <span className="text-text-muted uppercase tracking-wider">// SYSTEM_METRICS</span>
                <span className="text-success font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-success animate-ping" />
                  {t.codeMetrics.operationalPill}
                </span>
              </div>

              <div className="space-y-3.5">
                <div className="flex items-center justify-between py-1 border-b border-border/40">
                  <span className="text-text-muted flex items-center gap-2">
                    <GitCommit className="w-3.5 h-3.5 text-accent" />
                    {t.codeMetrics.commits}
                  </span>
                  <span className="text-text-primary font-bold">{CODE_METRICS.totalCommits}</span>
                </div>

                <div className="flex items-center justify-between py-1 border-b border-border/40">
                  <span className="text-text-muted flex items-center gap-2">
                    <GitFork className="w-3.5 h-3.5 text-accent" />
                    {t.codeMetrics.repos}
                  </span>
                  <span className="text-text-primary font-bold">{CODE_METRICS.reposContributed}</span>
                </div>

                <div className="flex items-center justify-between py-1 border-b border-border/40">
                  <span className="text-text-muted flex items-center gap-2">
                    <GitPullRequest className="w-3.5 h-3.5 text-accent" />
                    {t.codeMetrics.prs}
                  </span>
                  <span className="text-text-primary font-bold">{CODE_METRICS.pullRequestsMerged}</span>
                </div>

                <div className="flex items-center justify-between py-1 border-b border-border/40">
                  <span className="text-text-muted">SERVER_VERSION</span>
                  <span className="text-accent">{CODE_METRICS.serverVersion}</span>
                </div>

                <div className="flex items-center justify-between py-1">
                  <span className="text-text-muted">OPERATIONAL_STATE</span>
                  <span className="text-text-secondary">{CODE_METRICS.operationalStatus}</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-border">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-btn bg-surface-elevated hover:bg-surface-bright border border-border-strong text-text-primary transition-colors focus-ring"
              >
                <Github className="w-4 h-4" />
                <span>{language === 'ar' ? 'زيارة الملف الشخصي على GitHub' : 'Visit GitHub Profile'}</span>
                <ArrowUpRight className={`w-3.5 h-3.5 text-text-muted ${isRTL ? 'rotate-90' : ''}`} />
              </a>
            </div>
          </div>

          {/* Right Column: Open Source Repository Rows (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {GITHUB_REPOS.map((repo: any) => (
              <a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-card bg-surface border border-border hover:border-accent hover:bg-surface-elevated/70 transition-all duration-200 flex flex-col justify-between focus-ring"
              >
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="flex items-center gap-2 font-mono text-sm font-bold text-text-primary group-hover:text-accent transition-colors">
                    <Github className="w-4 h-4 text-accent shrink-0" />
                    <span>{repo.name}</span>
                  </div>
                  <ArrowUpRight className={`w-4 h-4 text-text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all ${isRTL ? 'rotate-90' : ''}`} />
                </div>

                <p className="text-xs text-text-secondary leading-relaxed mb-4 font-sans">
                  {repo.description}
                </p>

                <div className="flex items-center gap-4 font-mono text-[11px] text-text-muted pt-3 border-t border-border/50">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    {repo.language}
                  </span>
                  <span>★ {repo.stars} stars</span>
                  <span>⑂ {repo.forks} forks</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
