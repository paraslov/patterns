interface WeaponBehavior {
  useWeapon: () => void
}

class KnifeBehavior implements WeaponBehavior {
  useWeapon(): void {
    console.log('Stab stab stab!')
  }
}

class BowAndArrowBehavior implements WeaponBehavior {
  useWeapon(): void {
    console.log('Aim and shoot!')
  }
}

class AxeBehavior implements WeaponBehavior {
  useWeapon(): void {
    console.log('Hack and Smash!')
  }
}

class SwordBehavior implements WeaponBehavior {
  useWeapon(): void {
    console.log('Slash slash!')
  }
}

abstract class Character {
  protected weapon: WeaponBehavior

  protected constructor(weapon: WeaponBehavior) {
    this.weapon = weapon
  }

  fight() {
    this.weapon.useWeapon()
  }

  setWeaponBehavior(weapon: WeaponBehavior) {
    this.weapon = weapon
  }
}

class Knight extends Character {
  constructor() {
    super(new SwordBehavior())
  }
}

const knight = new Knight()
knight.fight()
knight.setWeaponBehavior(new BowAndArrowBehavior())
knight.fight()
