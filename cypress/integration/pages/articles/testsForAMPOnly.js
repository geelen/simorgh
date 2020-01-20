import envConfig from '../../../support/config/envs';
import config from '../../../support/config/services';
import appToggles from '../../../support/helpers/useAppToggles';
import { getBlockData } from './helpers';

// TODO: Remove after https://github.com/bbc/simorgh/issues/2959
const serviceHasFigure = service =>
  ['arabic', 'news', 'pashto', 'persian', 'urdu'].includes(service);

// For testing important features that differ between services, e.g. Timestamps.
// We recommend using inline conditional logic to limit tests to services which differ.
export const testsThatAlwaysRunForAMPOnly = ({ service, pageType }) => {
  describe(`No testsToAlwaysRunForAMPOnly to run for ${service} ${pageType}`, () => {});
};

// For testing feastures that may differ across services but share a common logic e.g. translated strings.
export const testsThatFollowSmokeTestConfigForAMPOnly = ({
  service,
  pageType,
}) =>
  describe(`Running testsForAMPOnly for ${service} ${pageType}`, () => {
    if (appToggles.chartbeatAnalytics.enabled) {
      describe('Chartbeat', () => {
        if (envConfig.chartbeatEnabled) {
          it('should have chartbeat config UID', () => {
            cy.hasAmpChartbeatConfigUid();
          });
        }
      });
    }

    it('should contain an amp-img', () => {
      if (serviceHasFigure(service)) {
        cy.get('figure')
          .eq(0)
          .should('be.visible')
          .within(() => {
            cy.get('amp-img').should('be.visible');
          });
      }
    });

    // `appToggles` tells us whether a feature is toggled on or off in the current environment.
    if (appToggles.mediaPlayer.enabled) {
      describe('Media Player: AMP', () => {
        it('should render a placeholder image', () => {
          cy.request(`${config[service].pageTypes.articles.path}.json`).then(
            ({ body }) => {
              const media = getBlockData('video', body);
              if (media && media.type === 'video') {
                cy.get('div[class^="StyledVideoContainer"]').within(() => {
                  cy.get('amp-img')
                    .should('have.attr', 'src')
                    .should('not.be.empty');
                });
              }
            },
          );
        });

        // Tests requiring iframe access are temporarily being throttled to the 'news' service.
        if (service === 'news') {
          it('should autoplay', () => {
            cy.request(`${config[service].pageTypes.articles.path}.json`).then(
              ({ body }) => {
                const media = getBlockData('video', body);
                if (media && media.type === 'video') {
                  cy.get(
                    'div[class^="StyledVideoContainer"] iframe[class^="i-amphtml-fill-content"]',
                  )
                    .scrollIntoView()
                    .then($iframe => {
                      cy.wrap($iframe.prop('contentWindow'), {
                        // `timeout` only applies to the methods chained below.
                        // `its()` benefits from this, and will wait up to 8s
                        // for the mediaPlayer instance to become available.
                        timeout: 8000,
                      })
                        .its('embeddedMedia.playerInstances.mediaPlayer')
                        .invoke('currentTime')
                        .should('be.gt', 0);
                    });
                }
              },
            );
          });
        }
      });
    }
  });

// For testing low priority things e.g. cosmetic differences, and a safe place to put slow tests.
export const testsThatNeverRunDuringSmokeTestingForAMPOnly = ({
  service,
  pageType,
}) => {
  describe(`No testsToNeverSmokeTestForAMPOnly to run for ${service} ${pageType}`, () => {});
};
